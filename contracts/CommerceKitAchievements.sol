// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CommerceKitAchievements is ERC721URIStorage, Ownable {

    uint256 private _nextTokenId = 1;

    mapping(address => bool) public hasExplorer;
    mapping(address => bool) public hasBuilder;
    mapping(address => bool) public hasGenesis;

    string private constant EXPLORER_URI =
        "https://raw.githubusercontent.com/bilalaumar1/commercekit-nfts/main/explorer.json";

    string private constant BUILDER_URI =
        "https://raw.githubusercontent.com/bilalaumar1/commercekit-nfts/main/builder.json";

    string private constant GENESIS_URI =
        "https://raw.githubusercontent.com/bilalaumar1/commercekit-nfts/main/genesis.json";

    constructor()
        ERC721("CommerceKit Achievements", "CKA")
        Ownable(msg.sender)
    {}

    function mintExplorer() external {
        require(!hasExplorer[msg.sender], "Explorer already minted");

        hasExplorer[msg.sender] = true;

        _safeMint(msg.sender, _nextTokenId);

        _setTokenURI(_nextTokenId, EXPLORER_URI);

        _nextTokenId++;
    }

    function mintBuilder() external {
        require(!hasBuilder[msg.sender], "Builder already minted");

        hasBuilder[msg.sender] = true;

        _safeMint(msg.sender, _nextTokenId);

        _setTokenURI(_nextTokenId, BUILDER_URI);

        _nextTokenId++;
    }

    function mintGenesis() external {
        require(!hasGenesis[msg.sender], "Genesis already minted");

        hasGenesis[msg.sender] = true;

        _safeMint(msg.sender, _nextTokenId);

        _setTokenURI(_nextTokenId, GENESIS_URI);

        _nextTokenId++;
    }
}