export default function CookiesModal({ toggleModal }: { toggleModal: () => void }) {
	return (
		<div className="fixed bottom-8 left-8 z-[999] flex h-72 w-1/4 flex-col gap-2 rounded-3xl border-2 border-white/40 bg-card-black/60 p-6 backdrop-blur-md">
			<h1 className="text-3xl">hey!</h1>
			<p className="">
				hey there! just a heads up, by using this website, your browser's storage is helping
				to temporarily hold data from github api requests. this makes everything run
				smoother and faster! <br /> <br />
				don't worry, none of your data is collected or stored!
			</p>
			<button onClick={toggleModal} className="w-full h-12 mt-auto text-xl">
				i understand!
			</button>
		</div>
	);
}
