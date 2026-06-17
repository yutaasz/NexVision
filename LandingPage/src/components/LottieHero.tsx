import { Component, type ReactNode } from "react";
import Lottie from "lottie-react";
import lottietech from "../assets/lottie_tech.json";

interface State {
    hasError: boolean;
}

class LottieErrorBoundary extends Component<{ children: ReactNode }, State> {
    state: State = { hasError: false };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) return null;
        return this.props.children;
    }
}

export default function LottieHero() {
    return (
        <LottieErrorBoundary>
            <Lottie animationData={lottietech} loop autoplay />
        </LottieErrorBoundary>
    );
}
