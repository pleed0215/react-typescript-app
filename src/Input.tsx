import React, { FunctionComponent } from "react";

interface IInputProps {
  value: string;
  onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void;
}

interface IFormProps {
  onFormSubmit: (event: React.FormEvent) => void;
}

export const Input: FunctionComponent<IInputProps> = ({
  value = "",
  onChange = () => {},
}) => (
  <input
    type="text"
    placeholder="write anything you want"
    value={value}
    onChange={onChange}
  />
);
export const Form: FunctionComponent<IFormProps> = ({
  children,
  onFormSubmit,
}) => <form onSubmit={onFormSubmit}>{children}</form>;
