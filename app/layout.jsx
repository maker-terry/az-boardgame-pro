export const metadata = {
  title: "A-Z Board Game Challenge",
  description: "BoardGameGeek A-Z Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  );
}
