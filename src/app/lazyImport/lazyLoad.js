import React from "react";
import loadable from "shared/loadable";
import SkeletonLoader from "components/SkeletonLoader";

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
  fallback: <SkeletonLoader />,
});

export const NotFound = loadable(() => import("pages/404 Page"), {
  fallback: <SkeletonLoader />,
});

export const Login = loadable(() => import("pages/Login"), {
  fallback: <SkeletonLoader />,
});

export const Register = loadable(() => import("pages/Register"), {
  fallback: <SkeletonLoader />,
});
