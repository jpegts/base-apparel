import React from "react";

export interface IHomeComposition {
  Nav: React.FC;
  Logo: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  Section: React.FC;
  Image: React.FC;
  Title: React.FC;
  Description: React.FC;
  Newsletter: React.FC<React.FormHTMLAttributes<HTMLFormElement>>;
  Email: React.FC<React.InputHTMLAttributes<HTMLInputElement>>;
  SubmitButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>>;
}
