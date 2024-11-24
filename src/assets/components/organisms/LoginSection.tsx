import Infos from "../molecules/Infos";
import LoginForm from "../molecules/LoginForm";


const LoginSection = () => {
    return (
        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center p-4">
            <div className="w-full md:w-1/2">
                <LoginForm />
            </div>
            <div className="w-full md:w-1/2 mt-6 md:mt-0">
                <Infos />
            </div>
        </div>
    );
};

export default LoginSection;