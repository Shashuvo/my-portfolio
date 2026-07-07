export default function Footer({ data }) {
  return (
    <footer
      className="flex items-center justify-center p-7 border-t text-[13.5px] relative z-[1]"
      style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
    >
      <p>
        © {new Date().getFullYear()} {data.profile.name}. Built with React.
      </p>
    </footer>
  );
}
