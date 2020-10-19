import reducer, { initialState } from "./auth";
import * as actionTypes from "../actions/types";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should store the token and userId upon successful authentication/login", () => {
    const updatedState = {
      ...initialState,
      token: "some-token",
      userId: "some-user-id",
    };

    expect(
      reducer(initialState, {
        type: actionTypes.AUTH_SUCCESS,
        idToken: "some-token",
        userId: "some-user-id",
      })
    ).toEqual(updatedState);
  });
});
