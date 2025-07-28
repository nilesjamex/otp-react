# otp-react

A customizable, lightweight OTP input component for React with standalone CSS
support.

## 📦 Installation

Install via npm:

```bash
npm install otp-react
```

or with yarn:

```bash
yarn add otp-react
```

---

## ⚙️ Usage

### Basic Example

```tsx
import React from "react";
import OtpInput from "otp-react";
import "otp-react/dist/styles.css"; // Optional: Use built-in styles

const App = () => {
  const handleComplete = (otp: string) => {
    console.log("OTP entered:", otp);
  };

  return <OtpInput numInputs={6} onComplete={handleComplete} />;
};

export default App;
```

---

## 🔧 Props

| Prop                 | Type                    | Default                 | Description                         |
| -------------------- | ----------------------- | ----------------------- | ----------------------------------- |
| `numInputs`          | `number`                | **required**            | Number of OTP input fields          |
| `onComplete`         | `(otp: string) => void` | **required**            | Callback when all inputs are filled |
| `autoFocus`          | `boolean`               | `true`                  | Autofocus the first input on mount  |
| `disabled`           | `boolean`               | `false`                 | Disable all inputs                  |
| `inputType`          | `"text"` \| `"number"`  | `"text"`                | Input field type                    |
| `placeholder`        | `string`                | `""`                    | Placeholder for each input          |
| `containerClassName` | `string`                | `"otp-input-container"` | CSS class for the wrapper div       |
| `inputClassName`     | `string`                | `"otp-input"`           | CSS class for each input field      |
| `inputStyle`         | `React.CSSProperties`   | `{}`                    | Inline styles for input fields      |

---

## 🎨 Styling

This component comes with basic styles.

### Option 1: Use default styles

```tsx
import "otp-react/dist/styles.css";
```

### Option 2: Override with your own

```tsx
<OtpInput
  numInputs={6}
  onComplete={handleOtp}
  containerClassName="my-otp-container"
  inputClassName="my-otp-input"
/>
```

You can also use `inputStyle` for inline styles:

```tsx
<OtpInput
  numInputs={6}
  onComplete={handleOtp}
  inputStyle={{ borderColor: "red", fontSize: "18px" }}
/>
```

---

## 💡 Features

- ✅ Keyboard navigation
- ✅ Paste support (auto-distributes digits)
- ✅ Auto-focus & blur behavior
- ✅ Type-safe with TypeScript
- ✅ Customizable via className or inline styles

---

## 🛠️ Development

Clone the repo:

```bash
git clone https://github.com/nilesjamex/otp-react.git
cd otp-react
npm install
```

Build it:

```bash
npm run build
```

---

## 📚 License

[MIT](./LICENSE)

---

## 🧑‍💻 Author

Developed by [Niles Jamex](https://github.com/nilesjamex)

---

## 🐛 Issues & Feedback

If you find a bug or want to suggest a feature, please
[open an issue](https://github.com/nilesjamex/otp-react/issues).

---

## ⭐️ Star the Repo

If you found this useful, consider starring the repo to support the project!
