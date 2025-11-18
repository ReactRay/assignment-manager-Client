import { useDispatch } from "react-redux";
import { loadUserFromStorage } from "../redux/auth/authSlice";
import { useEffect } from "react";

interface Props {
    children: React.ReactNode;
}

export default function AuthInitializer({ children }: Props) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUserFromStorage());
    }, [dispatch]);

    return <>{children}</>;
}
