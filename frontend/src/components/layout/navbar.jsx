"use client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (id) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<header className="border-b border-zinc-800 bg-black text-white">
			<div className="container flex h-16 items-center justify-between px-4 md:px-6">
				<Link to="/" className="flex items-center gap-2">
					<span className="text-2xl font-bold">
						<span className="text-white">Scan</span>
						<span className="text-indigo-400">work</span>
					</span>
				</Link>
				<nav className="hidden md:flex gap-6">
					<Link
						onClick={() => scrollToSection("features")}
						className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
					>
						Features
					</Link>
					<Link
						onClick={() => scrollToSection("testimonials")}
						className="text-sm font-medium text-gray-300 hover:text-white hover:underline underline-offset-4"
					>
						Testimonials
					</Link>
				</nav>
				<div className="flex items-center gap-4">
					<Button
						asChild
						variant="outline"
						className="hidden md:inline-flex border-indigo-400 text-indigo-400 hover:bg-indigo-950"
					>
						<Link to="/login">Login</Link>
					</Button>
					<Button
						asChild
						className="hidden md:inline-flex bg-indigo-500 hover:bg-indigo-600"
					>
						<Link to="/signup">Get Started</Link>
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="md:hidden text-white hover:bg-zinc-800"
						onClick={() => setIsMenuOpen(!isMenuOpen)}
					>
						{isMenuOpen ? (
							<X className="h-5 w-5" />
						) : (
							<Menu className="h-5 w-5" />
						)}
					</Button>
				</div>
			</div>
			{isMenuOpen && (
				<div className="container md:hidden py-4 px-4 bg-black border-t border-zinc-800">
					<nav className="flex flex-col gap-4">
						<Link
							onClick={() => scrollToSection("features")}
							className="text-sm font-medium text-gray-300"
						>
							Features
						</Link>
						<Link
							onClick={() => scrollToSection("testimonials")}
							className="text-sm font-medium text-gray-300"
						>
							Testimonials
						</Link>
						<Button
							asChild
							variant="outline"
							className="w-full border-indigo-400 text-indigo-400 hover:bg-indigo-950"
						>
							<Link to="/login">Login</Link>
						</Button>
						<Button
							asChild
							className="w-full bg-indigo-500 hover:bg-indigo-600"
						>
							<Link to="/signup">Get Started</Link>
						</Button>
					</nav>
				</div>
			)}
		</header>
	);
}
