import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email || "your email";

  const handleVerification = () => {
    toast.success("Email verified successfully!");
    navigate("/onboarding");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        <h2 className="text-3xl font-bold gradient-text">Verify your email</h2>
        <p className="text-gray-600">
          We've sent a verification link to {email}. Please check your inbox and click the link to verify your account.
        </p>
        
        {/* For demo purposes, we'll add a button to simulate email verification */}
        <Button onClick={handleVerification} variant="outline">
          Simulate Email Verification
        </Button>
      </div>
    </div>
  );
};

export default VerifyEmail;