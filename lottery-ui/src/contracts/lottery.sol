// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.21;

contract Lottery {
    address public manager;
    address[] public players;

    constructor(){
        manager = msg.sender;
    }

    function enter() public payable{
        require(msg.sender != manager);
        require(msg.value == .01 ether);
        players.push(msg.sender);
    }

    function getPlayers() public view returns (address[] memory) {
        return players;
    }

    function random () private view returns(uint){                                              
        return uint(keccak256(abi.encodePacked(block.prevrandao, block.timestamp, players)));
    }

    function winnerPicker() public restricted returns(address){
        uint index = random() % players.length;
        address payable payable_address = payable(players[index]);
        payable_address.transfer(address(this).balance);
        players = new address[](0);
        return payable_address;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
}