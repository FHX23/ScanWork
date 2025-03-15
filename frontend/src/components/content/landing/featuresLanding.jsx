import {
	Scan,
	FileSearch,
	Share2,
	Shield,
	CloudUpload,
	Smartphone,
} from "lucide-react";

export default function FeaturesSection() {
	const features = [
		{
			icon: <Scan className="h-10 w-10 text-indigo-400" />,
			title: "Smart Scanning",
			description:
				"Advanced OCR technology that accurately captures text from any document.",
		},
		{
			icon: <FileSearch className="h-10 w-10 text-indigo-400" />,
			title: "Intelligent Search",
			description:
				"Find any document in seconds with our powerful search capabilities.",
		},
		{
			icon: <Share2 className="h-10 w-10 text-indigo-400" />,
			title: "Easy Sharing",
			description:
				"Share documents securely with team members or clients with just a few clicks.",
		},
		{
			icon: <Shield className="h-10 w-10 text-indigo-400" />,
			title: "Secure Storage",
			description:
				"Bank-level encryption keeps your sensitive documents safe and protected.",
		},
		{
			icon: <CloudUpload className="h-10 w-10 text-indigo-400" />,
			title: "Cloud Integration",
			description:
				"Seamlessly connect with your favorite cloud storage services.",
		},
		{
			icon: <Smartphone className="h-10 w-10 text-indigo-400" />,
			title: "Mobile Access",
			description:
				"Scan, access, and manage your documents from anywhere with our mobile app.",
		},
	];

	return (
		<section
			id="features"
			className="w-full py-12 md:py-24 lg:py-32 bg-black text-white"
		>
			<div className="container px-4 md:px-6">
				<div className="flex flex-col items-center justify-center space-y-4 text-center">
					<div className="space-y-2">
						<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
							Powerful Features
						</h2>
						<p className="max-w-[900px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
							Everything you need to digitize and manage your documents
							efficiently
						</p>
					</div>
				</div>
				<div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col items-center space-y-2 rounded-lg border border-indigo-900 p-6 bg-black shadow-md"
						>
							{feature.icon}
							<h3 className="text-xl font-bold text-white">{feature.title}</h3>
							<p className="text-gray-300 text-center">{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
