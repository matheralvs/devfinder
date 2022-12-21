import {
  ProfileBoxContainer,
  ProfileBoxContent,
  ProfileBoxFooter,
  ProfileBoxHeader,
  ProfileBoxInfo,
  ProfileBoxSocial,
  ProfileImage,
} from "./styles";

import { Buildings, Link, MapPin, TwitterLogo } from "phosphor-react";

import { IUser } from "../../pages/Home";

interface ProfileBoxProps {
  user: IUser;
}

export function ProfileBox({ user }: ProfileBoxProps) {
  return (
    <ProfileBoxContainer>
      <ProfileImage src={user?.avatar_url} />

      <ProfileBoxContent>
        <ProfileBoxHeader>
          <header>
            <strong>{user?.name}</strong>
            <span>{`Joined ${new Date(user?.created_at)
              .toDateString()
              .replace(/^\S+\s/, "")}`}</span>
          </header>
          <span>{`@${user?.login}`}</span>
          <p>{user?.bio === null ? "User without description." : user?.bio}</p>
        </ProfileBoxHeader>

        <ProfileBoxInfo>
          <div>
            <span>Repos</span>
            <strong>{user?.public_repos}</strong>
          </div>

          <div>
            <span>Followers</span>
            <strong>{user?.followers}</strong>
          </div>

          <div>
            <span>Following</span>
            <strong>{user?.following}</strong>
          </div>
        </ProfileBoxInfo>

        <ProfileBoxFooter>
          <ProfileBoxSocial
            variant={user?.location === null ? "disabled" : "enabled"}
          >
            <MapPin weight="fill" />
            <span>
              {user?.location === null ? "Not Available" : user?.location}
            </span>
          </ProfileBoxSocial>

          <ProfileBoxSocial
            variant={user?.twitter_username === null ? "disabled" : "enabled"}
          >
            <TwitterLogo weight="fill" />
            <span>
              {user?.twitter_username === null
                ? "Not Available"
                : user?.twitter_username}
            </span>
          </ProfileBoxSocial>

          <ProfileBoxSocial>
            <Link weight="fill" />
            <a href={user?.html_url} target="_blank">
              {user?.html_url}
            </a>
          </ProfileBoxSocial>

          <ProfileBoxSocial
            variant={user?.company === null ? "disabled" : "enabled"}
          >
            <Buildings weight="fill" />
            <span>
              {user?.company === null ? "Not Available" : user?.company}
            </span>
          </ProfileBoxSocial>
        </ProfileBoxFooter>
      </ProfileBoxContent>
    </ProfileBoxContainer>
  );
}
