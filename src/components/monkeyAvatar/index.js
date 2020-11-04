import React, { memo } from "react";

// Styles
import "./style.scss";

function MonkeyAvatarBase(props) {
  return (
    <div
      {...{
        id: props.id,
        ...props,
        className: "simple-avatar ".concat(props.className || ""),
        style: {
          background: props.color,
          ...props.style,
        },
      }}
    >
      {props.children}
    </div>
  );
}

function MonkeyAvatar(props) {
  return props.user ? (
    props.user.image ? (
      <img
        {...{
          src: props.user.image,
          id: `user-avatar-${props.user.id}-id`,
          alt: `user-avatar-${props.user.id}-description`,
          ...props,
          className: "user-avatar-image ".concat(props.className || ""),
        }}
      />
    ) : (
      <MonkeyAvatarBase
        {...{
          className: props.className,
          id: `simple-avatar-${props.user.id}-id`,
          color: props.user.color,
          ...props,
        }}
      >
        <span className="color-inherit">
          {props.user.first_name[0]}
          {props.user.last_name[0]}
        </span>
      </MonkeyAvatarBase>
    )
  ) : (
    <MonkeyAvatarBase
      {...{
        className: props.className,
        id: "simple-avatar-id",
        color: props.color,
        ...props,
      }}
    >
      {props.children}
    </MonkeyAvatarBase>
  );
}

export default memo(MonkeyAvatar);
