import React from "react";
import loadable from "shared/loadable";
import SkeletonLoader from "components/SkeletonLoader";
import RoundLoader from "components/RoundLoader";

// ******************** Export Components ******************** //
export const LoginForm = loadable(() => import("components/LoginForm"), {
  fallback: <SkeletonLoader />,
});

export const RegisterForm = loadable(() => import("components/RegisterForm"), {
  fallback: <SkeletonLoader />,
});

export const Profile = loadable(() => import("components/Profile"), {
  fallback: <SkeletonLoader />,
});

// ******************** Export Pages ******************** //
export const Home = loadable(() => import("pages/Home"), {
  fallback: <RoundLoader />,
});

export const NotFound = loadable(() => import("pages/404 Page"), {
  fallback: <RoundLoader />,
});

export const Login = loadable(() => import("pages/Login"), {
  fallback: <RoundLoader />,
});

export const Register = loadable(() => import("pages/Register"), {
  fallback: <RoundLoader />,
});
