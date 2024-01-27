import { Toaster } from "react-hot-toast";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <div>
      <AppLayout />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={
          ({ success: { duration: 3000 } },
          { error: { duration: 5000 } },
          {
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-grey-50)",
              color: "var(--color-grey-700)",
            },
          })
        }
      />
    </div>
  );
}

export default App;
