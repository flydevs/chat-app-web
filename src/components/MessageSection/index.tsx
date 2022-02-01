import React, { useState, useEffect } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import "./MessageSection.scss";
import { BsChevronDown } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import ContactsCard from "./components/ContactsCard/ContactsCard";
import { objectInterface } from "../../utils/interfaces";
import { randomNum } from "../../utils/conversutils";
import { fetchConversations } from "../../actions/conversations";

const MessageSection: React.FC = () => {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<objectInterface[]>([]);
	const [selected, setSelected] = useState("");

	const dispatch = useDispatch();
	const conversations = useSelector(
		(state: RootStateOrAny) => state.conversations.conversations
	);

	useEffect(() => {
		dispatch(fetchConversations());
	}, [dispatch]);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const toggleSelected = (name: string) => {
		//TODO: UPDATE TO USE USER UUID WHEN API READY
		setSelected(name);
	};

	useEffect(() => {
		//without this first render would give undefined on conversations array since async is not completed
		if (search === "" && conversations) {
			setResults(
				conversations
					.sort((a: objectInterface, b: objectInterface) => {
						const date1: Date = new Date(a.createdAt);
						const date2: Date = new Date(b.createdAt);
						return date1.getTime() - date2.getTime();
					})
					.reverse()
			);
		}
	}, [conversations, search]);

	useEffect(() => {
		if (search != "" && conversations) {
			//compares search parameter and conversations names to find matches and render those convs.
			const regSearch = new RegExp(search, "i");
			const results = conversations
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
			conversations && setResults(conversations);
		}
	}, [conversations, search]);

	return (
		<div data-testid="messages" className="messages">
			<div className="messages__header">
				<div className="messages__header__title">
					<h2 className="messages__header__title__h2">Messages</h2>
					<span className="messages__header__title__dropdownIcon">
						<BsChevronDown size={12} />
					</span>
					<span className="messages__header__title__badge">
						{conversations && conversations.length}
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
