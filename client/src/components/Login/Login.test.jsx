import React from "react";
import {
  render,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";
import Form, { validateInput } from "./Form";

describe("login describe statement", () => {
  test("validate fuction should pass on correct input", () => {
    const text = "text@text.com";
    expect(validateInput(text)).toBe(true);
  });

  test("validate function should fail on incorrect input", () => {
    const text = "text";
    expect(validateInput(text)).not.toBe(true);
  });

  test("email input should accept text", () => {
    const { getByPlaceholderText, getByText } = render(<Form />);
    const emailInputNode = getByPlaceholderText("Email");
    expect(emailInputNode.value).toMatch("");

    fireEvent.change(emailInputNode, { target: { value: "testing" } });
    expect(emailInputNode.value).toMatch("testing");

    const errorMessageNode = getByText("Email not valid");
    expect(errorMessageNode).toBeInTheDocument();
  });
});
