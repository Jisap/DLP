import Button from "@/components/Button";


export default function Hero() {
    return (
        <section className="py-24">
					<div className="container">
						<div className="flex justify-center">
							<div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
								✨$7.5M seed round raised
							</div>
						</div>
						<h1 className="text-6xl md:text-7xl font-medium text-center mt-6">
							Impactful design, created effortlessly
						</h1>
						<p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
							Desing tools shouldn&apos;t slow you down. Layers combine powerful features with an intuitive interface that keeps you creative flow.
						</p>
						<div className="mt-8 max-w-lg mx-auto px-4 sm:px-0">
							<form className="flex border border-white/15 rounded-full p-2">
										<input 
											type="email" 
											placeholder="Enter your email" 
											className="bg-transparent px-4 md:flex-1 min-w-0"	
										/>
										<Button
											type="submit"
											variant="primary"
											className="whitespace-nowrap"
											size="sm"
										>
											Sign Up
										</Button>
							</form>
						</div>
					</div>
				</section>
    )
}
