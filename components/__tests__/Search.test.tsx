import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Search from "../Search";

test("Search component updates search term correctly", () => {
  const searchTerm = "Bitcoin";
  const setSearchTerm = jest.fn(); // Mock de la función setSearchTerm

  const { getByPlaceholderText } = render(
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
  );

  const input = getByPlaceholderText("Search Cryptos");
  fireEvent.changeText(input, "Ethereum");

  expect(setSearchTerm).toHaveBeenCalledWith("Ethereum");
});
