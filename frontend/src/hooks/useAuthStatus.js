import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [checkingStatus, setCheckingStatue] = useState(true);

    // get user from the state
    const { user } = useSelector((state) => state.auth);
};
