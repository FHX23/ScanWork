import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
					<div className="space-y-4">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
							Streamline Your Workflow with{" "}
							<span className="text-white">Scan</span>
							<span className="text-indigo-400">work</span>
						</h1>
						<p className="text-gray-300 md:text-xl max-w-[800px] mx-auto">
							Digitize, organize, and optimize your document
							workflow. Save time and increase productivity with
							our intelligent scanning solution.
						</p>
					</div>
					<div className="flex flex-col gap-3 min-[400px]:flex-row">
						<Button
							asChild
							size="lg"
							className="bg-indigo-500 hover:bg-indigo-600 text-white"
						>
							<Link href="/signup">Get Started</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-indigo-400 text-indigo-400 hover:bg-indigo-950"
						>
							<Link href="/demo">Request Demo</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
