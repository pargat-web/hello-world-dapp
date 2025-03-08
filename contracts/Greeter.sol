// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

/**
 * @title Greeter
 * @dev A simple contract that stores and updates a greeting message
 */
contract Greeter {
    string private greeting;

    /**
     * @dev Constructor sets the initial greeting
     * @param _greeting Initial greeting message
     */
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    /**
     * @dev Returns the current greeting
     * @return Current greeting message
     */
    function greet() public view returns (string memory) {
        return greeting;
    }

    /**
     * @dev Updates the greeting message
     * @param _greeting New greeting message
     */
    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
} 