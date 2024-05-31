/** @format */
import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useContext } from "react";
import { PostContext } from "@/pages/_app";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const Post = ({ post }) => {
	const { title, reactions, body, tags, views, userId, id } = post;
	const { savedPost, setSavedPost } = useContext(PostContext);
	const router = useRouter();
	const handleSavePost = () => {
		setSavedPost([...savedPost, post]);
		toast.success("Post Saved..!!");
	};

	return (
		<div className="border flex flex-col p-3" key={id}>
			<div className="font-bold">{title}</div>
			<div className="flex flex-row gap-2">
				{tags.map((tag) => (
					<p className="text-[#0000FF]">#{tag}</p>
				))}
			</div>
			<div>{body}</div>
			{/* ---- footer ----  */}
			<div className="mt-1 border-t-2 flex flex-row justify-between py-2 px-1">
				<div className="flex flex-row gap-3">
					<div className="flex flex-row items-center gap-1">
						<ThumbUpIcon className="text-[#808080]" />
						<span>{reactions.likes}</span>
					</div>
					<div className="flex flex-row items-center gap-1">
						<ThumbDownAltIcon className="text-[#808080]" />
						<span>{reactions.dislikes}</span>
					</div>
				</div>
				{router.pathname !== "/savedPosts" && (
					<div>
						<button onClick={handleSavePost}>
							<BookmarkIcon className="text-[#808080]" />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Post;
