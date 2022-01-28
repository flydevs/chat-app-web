import React, { useContext, useState, useEffect } from "react";
import "./MessageSection.scss";
import { BsChevronDown } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import ContactsCard from "./components/ContactsCard/ContactsCard";
import { ConversationsContext } from "../../stores/ConversationsContext";
import { objectInterface } from "../../utils/interfaces";
import { randomNum } from "../../utils/conversutils";

const MessageSection: React.FC = () => {
	const objeto = useContext(ConversationsContext);
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<objectInterface[]>([]);
	const [selected, setSelected] = useState("");

	console.log(objeto);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const toggleSelected = (name: string) => {
		//TODO: UPDATE TO USE USER UUID WHEN API READY
		setSelected(name);
	};

	useEffect(() => {
		//without this first render would give undefined on conversations array since async is not completed
		if (search === "") {
			setResults(
				objeto.conversations
					.sort((a: objectInterface, b: objectInterface) => {
						const date1: Date = new Date(a.createdAt);
						const date2: Date = new Date(b.createdAt);
						return date1.getTime() - date2.getTime();
					})
					.reverse()
			);
		}
	}, [objeto.conversations, search]);

	useEffect(() => {
		if (search != "") {
			//compares search parameter and conversations names to find matches and render those convs.
			const regSearch = new RegExp(search, "i");
			const results = objeto.conversations
				.filter((obj: objectInterface) =>
					regSearch.test(obj.firstName + obj.lastName)
				)
				.sort((a: objectInterface, b: objectInterface) => {
					const date1 = new Date(a.createdAt);
					const date2 = new Date(b.createdAt);
					return date1.getTime() - date2.getTime();
				})
				.reverse();

			setResults(results);
		} else {
			setResults(objeto.conversations);
		}
	}, [objeto.conversations, search]);

	return (
		<div data-testid="messages" className="messages">
			<div className="messages__header">
				<div className="messages__header__title">
					<h2 className="messages__header__title__h2">Messages</h2>
					<span className="messages__header__title__dropdownIcon">
						<BsChevronDown size={12} />
					</span>
					<span className="messages__header__title__badge">
						{objeto.conversations.length}
					</span>
				</div>
				<button className="messages__header__plusButton">+</button>
			</div>

			<div className="messages__searchBar">
				<div className="messages__searchBar__lupa">
					<RiSearchLine />
				</div>
				<input
					onChange={handleSearchChange}
					type="search"
					placeholder="Search messages"
				/>
			</div>
			<div className="messages__container">
				<div data-testid="container" className="messages__container__inner">
					{results.length > 0 ? (
						results.map((conver: objectInterface, i: number) => (
							<ContactsCard
								key={i}
								timeAgo={conver.createdAt}
								selected={
									conver.firstName + conver.lastName === selected
										? "selected"
										: ""
								}
								lastMessage={conver.message}
								firstName={conver.firstName}
								lastName={conver.lastName}
								profileImg={conver.profileImg}
								unread={randomNum(-5, 12)}
								toggleSelected={() =>
									toggleSelected(conver.firstName + conver.lastName)
								}
								badges={[
									{
										text: "Question",
										color: "orange",
										backgroundColor: "rgba(254, 235, 200, 1)"
									},
									{
										text: "Help wanted",
										color: "rgba(56, 161, 105, 1)",
										backgroundColor: "rgba(198, 246, 213, 1)"
									}
								]}
							/>
						))
					) : (
						<h3 className="messages__container__inner__nochats">
              No chats found.
						</h3>
					)}
				</div>
			</div>
		</div>
	);
};

export default MessageSection;
