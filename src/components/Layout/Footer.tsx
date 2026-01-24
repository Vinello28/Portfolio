export const Footer = () => {
    return (
        <footer className="py-8 mt-20 border-t border-[var(--bg-secondary)]">
            <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--text-secondary)]">
                <p>&copy; {new Date().getFullYear()} Gabriele. All rights reserved.</p>
                <p>Built with React + Vite</p>
            </div>
        </footer>
    );
};
