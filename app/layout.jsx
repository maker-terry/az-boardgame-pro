import "../styles/globals.css";

export const metadata = {
  title: "A-Z Board Game Challenge",
  description: "BoardGameGeek A-Z Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="bg-gray-100 text-gray-800">
        {children}
      </body>
    </html>
  );
}
