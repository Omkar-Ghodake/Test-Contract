// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract Demo {
  int num1;
  int num2;

  constructor(int x, int y) public {
    num1 = x;
    num2 = y;
  }

  function add() public view returns(int) {
    return num1 + num2;
  }

  function changeNums(int newX, int newY) public {
      num1 = newX;
      num2 = newY;
  }
}