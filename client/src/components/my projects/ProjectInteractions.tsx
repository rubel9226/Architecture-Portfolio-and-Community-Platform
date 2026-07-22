"use client";

import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";

interface Props {
    projectId: string;
    likes: string[];
    likeCount: number;
    comments: string[];
    commentCount: number;
}

export default function ProjectInteractions({ projectId, likes, likeCount, comments, commentCount, }: Props) {

    const [liked, setLiked] = useState(false);
    const [totalLikes, setTotalLikes] = useState(likeCount);
    const [comment, setComment] = useState("");

    const handleLike = async () => {
        try {
            // await api.put(`/project/like/${projectId}`)
            setLiked(!liked);
            setTotalLikes(prev =>
                liked ? prev - 1 : prev + 1
            );
        } catch (error) {
            console.log(error);
        }
    };

    const handleComment = async () => {
        if (!comment.trim()) return;
        try {
            // await api.post(`/project/comment/${projectId}`,{
            //     comment
            // })
            setComment("");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="rounded-xl border border-slate-700 bg-slate-900 p-5 space-y-5">
            <div className="flex items-center gap-6">
                <button
                    onClick={handleLike}
                    className={`flex items-center gap-2 transition ${
                        liked
                            ? "text-red-500"
                            : "text-slate-300 hover:text-red-500"
                    }`}
                >
                    <Heart
                        size={20}
                        fill={liked ? "currentColor" : "none"}
                    />
                    <span>{totalLikes}</span>
                </button>
                <div className="flex items-center gap-2 text-slate-300">
                    <MessageCircle size={20} />
                    <span>{commentCount}</span>
                </div>
            </div>
            <div className="space-y-3">
                <textarea
                    rows={3}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Write your comment..."
                    className="w-full rounded-lg bg-slate-800 border border-slate-700 p-3 text-sm text-white outline-none"
                />
                <button
                    onClick={handleComment}
                    className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
                >
                    <Send size={16} />
                    Comment
                </button>
            </div>
            <div className="space-y-3">
                {comments.map((comment, index) => (
                    <div
                        key={index}
                        className="rounded-lg bg-slate-800 p-3"
                    >
                        <p className="text-sm text-slate-300">
                            {comment}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}