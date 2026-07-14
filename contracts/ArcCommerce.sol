// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract ArcCommerce {

    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner");
        _;
    }

    struct Purchase {
        uint256 productId;
        uint256 amount;
        uint256 timestamp;
    }

    mapping(address => Purchase[]) private purchases;

    event ProductPurchased(
        address indexed buyer,
        uint256 indexed productId,
        uint256 amount
    );

    // Buy a product
    function buyProduct(uint256 productId) external payable {
        require(msg.value > 0, "No payment");

        purchases[msg.sender].push(
            Purchase({
                productId: productId,
                amount: msg.value,
                timestamp: block.timestamp
            })
        );

        (bool success, ) = owner.call{value: msg.value}("");
        require(success, "Payment failed");

        emit ProductPurchased(
            msg.sender,
            productId,
            msg.value
        );
    }

    // Get all purchases for a user
    function getPurchases(address user)
        external
        view
        returns (Purchase[] memory)
    {
        return purchases[user];
    }

    // Get contract balance
    function getBalance()
        external
        view
        returns (uint256)
    {
        return address(this).balance;
    }
}