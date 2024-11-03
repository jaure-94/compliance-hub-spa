import { Ellipsis } from "react-css-spinners";
import Logo from "@/assets/ch-logo.svg";

export function Loader() {
    return (
        <div className="flex items-center justify-center bg-gray-100 w-screen h-screen overflow-x-clip overflow-y-clip">
            <div className="flex flex-col">
                <div className="flex justify-center">
                    <Logo className="h-56 lg:h-72" />
                </div>

                <div className="flex justify-center">
                    <Ellipsis
                        color="rgba(0,0,0,1)"
                        size={89}
                    />
                </div>
            </div>
        </div>
    )
}
