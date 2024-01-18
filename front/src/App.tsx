import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useReducer } from "react";

import AuthContext, {
  authReducer,
  initialState,
} from "./container/AuthContext";
import AuthRoute from "./container/AuthRoute";
import PrivateRoute from "./container/PrivateRoute";

import WelcomePage from "./page/welcome";

import SignupPage from "./page/signup";

import SignupConfirmPage from "./page/signup-confirm";

import SigninPage from "./page/signin";

import RecoveryPage from "./page/recovery";

import RecoveryConfirmPage from "./page/recoveryConfirm";

import BalancePage from "./page/balance";

import NotificationsPage from "./page/notifications";

import SettingsPage from "./page/settings";

import RecivePage from "./page/recive";

import SendPage from "./page/send";

import TransactionPage from "./page/transaction";

// export const Error: React.FC = () => {
//   return <div className="App-header">Error</div>;
// };

// export const AuthRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = React.useContext(AuthContext);
//   let isConfirm = false;

//   if (auth) {
//     console.log("AuthRoute", auth);
//     if ((auth.authContextData.user as any).isConfirm) {
//       if ((auth.authContextData.user as any).isConfirm === true)
//         isConfirm = true;
//     }

//     return auth.authContextData.token.length === 0 || isConfirm === false ? (
//       <>{children}</>
//     ) : (
//       <Navigate to="/balance" replace />
//     );
//   } else return <Error />;
// };

// const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const auth = React.useContext(AuthContext);
//   if (auth) {
//     console.log("PrivateRoute", auth);
//   }
//   if (!auth) return <Error />;
//   return auth.authContextData.token.length > 0 ? (
//     <>{children}</>
//   ) : (
//     <Navigate to="/signup" replace />
//   );
// };

// export type ContextType = {
//   authContextData: State;
//   authDispatch: (action: Action | any) => void;
// };

// export const AuthContext = React.createContext<ContextType | null>(null);

// export enum AUTH_ACTION_TYPE {
//   LOGIN = "LOGIN",
//   LOGOUT = "LOGOUT",
// }

// type Action = {
//   type: AUTH_ACTION_TYPE | any;
// };

// type State = {
//   token: string;
//   user: object;
// };

// export const authReducer = (state: State, action: any): State => {
//   switch (action.type) {
//     case AUTH_ACTION_TYPE.LOGIN: {
//       return {
//         ...state,
//         ...action.payload,
//       };
//     }
//     case AUTH_ACTION_TYPE.LOGOUT:
//       return {
//         ...state,
//         ...{ token: "", user: {} },
//       };
//     default:
//       return state;
//   }
// };

// type InitialState = {
//   token: "";
//   user: {};
// };

function App() {
  // const initState: InitialState = { token: "", user: {} };
  // const initializer = (state: InitialState) => ({ ...state });

  // const [authContextData, authDispatch] = useReducer<
  //   React.Reducer<State, any>,
  //   InitialState
  // >(authReducer, initState, initializer);

  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <AuthRoute>
                <WelcomePage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <AuthRoute>
                <SignupPage />
              </AuthRoute>
            }
          />
          <Route
            path="/signup-confirm"
            element={
              <PrivateRoute>
                <SignupConfirmPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/signin"
            element={
              <AuthRoute>
                <SigninPage />
              </AuthRoute>
            }
          />
          <Route
            path="/recovery"
            element={
              <AuthRoute>
                <RecoveryPage />
              </AuthRoute>
            }
          />
          <Route
            path="/recovery-confirm"
            element={
              <AuthRoute>
                <RecoveryConfirmPage />
              </AuthRoute>
            }
          />
          <Route
            path="/balance"
            element={
              <PrivateRoute>
                <BalancePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <PrivateRoute>
                <NotificationsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <SettingsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/recive"
            element={
              <PrivateRoute>
                <RecivePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/send"
            element={
              <PrivateRoute>
                <SendPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/transaction/:transactionId"
            element={
              <PrivateRoute>
                <TransactionPage />
              </PrivateRoute>
            }
          />
          {/* <Route path="*" Component={Error} /> */}
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
