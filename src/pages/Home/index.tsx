import { HomeContainer } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ProfileBox } from "../../components/ProfileBox";

import { FormEvent, useState } from "react";
import api from "../../api";

import imgProfile from "../../assets/profile.png";

export interface IUser {
  id: number;
  name: string;
  avatar_url: string;
  created_at: string;
  login: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  html_url: string;
  twitter_username: string | null;
  company: string | null;
}

export function Home() {
  const [user, setUser] = useState<IUser>({
    id: 109676973,
    name: "John Doe",
    avatar_url: `${imgProfile}`,
    created_at: new Date("25 Jan 2022").toDateString(),
    login: "johndoe",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
    public_repos: 8,
    followers: 3938,
    following: 9,
    location: "San Francisco",
    html_url: "https://github.com/johndoe",
    twitter_username: "johndoe",
    company: "@github",
  });
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (value: string) => {
    setInputValue(value);
  };

  const handleRenderUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await api.get(`/users/${inputValue}`);
    const data = await response.data;

    setUser(data);
    setInputValue("");
  };

  return (
    <HomeContainer>
      <Header />
      <Input
        inputValue={inputValue}
        onChange={handleInputValue}
        onSetUser={handleRenderUser}
      />
      <ProfileBox user={user} />
    </HomeContainer>
  );
}
