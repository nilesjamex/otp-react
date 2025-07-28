import React, { useRef, useState, useEffect } from "react";
import "./styles.css";

interface OtpInputProps {
  numInputs: number;
  onComplete: (otp: string) => void;
  autoFocus?: boolean;
  disabled?: boolean;
  inputType?: "text" | "number";
  placeholder?: string;
  containerClassName?: string;
  inputClassName?: string;
  inputStyle?: React.CSSProperties;
}

const OtpInput: React.FC<OtpInputProps> = ({
  numInputs,
  onComplete,
  autoFocus = true,
  disabled = false,
  inputType = "text",
  placeholder = "",
  containerClassName = "otp-input-container",
  inputClassName = "otp-input",
  inputStyle = {},
}) => {
  const [otp, setOtp] = useState<string[]>(Array(numInputs).fill(""));
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [autoFocus]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < numInputs - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every((digit) => digit !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .slice(0, numInputs)
      .split("")
      .filter((c) => /\d/.test(c));
    const newOtp = [...otp];
    pasted.forEach((digit, i) => {
      if (i < numInputs) newOtp[i] = digit;
    });
    setOtp(newOtp);

    const lastFilledIndex = newOtp.findLastIndex((val) => val !== "");
    if (lastFilledIndex !== -1) {
      inputRefs.current[lastFilledIndex]?.focus();
    }

    if (newOtp.every((d) => d !== "")) {
      onComplete(newOtp.join(""));
    }
  };

  return (
    <div className={containerClassName} onPaste={handlePaste}>
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type={inputType}
          maxLength={1}
          value={digit}
          placeholder={placeholder}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className={inputClassName}
          style={inputStyle}
          inputMode="numeric"
          pattern="\d*"
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default OtpInput;
