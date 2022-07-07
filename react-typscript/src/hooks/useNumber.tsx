// creating a custom hook to for creating a set state with a number value:
import { useState } from "react";
export const useNumber = (initialValue: number) =>
  useState<number>(initialValue);
