'use client'
import React, { useState, useEffect } from "react";
import Sidebar from "../components/utility/Sidebar";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowReturnRight } from "react-icons/bs";
import axios from "axios";
import ChatBubble from "./ChatBubble"; // Create or import a component to display chat bubbles

export default function UnriddlePage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const [hasAnswer, setHasAnswer] = useState(''); // New state to track if there's an answer

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    window.addEventListener("click", closeSidebar);

    return () => {
      window.removeEventListener("click", closeSidebar);
    };
  }, []);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const handleQuestionSubmission = async () => {
    try {
      const response = await axios.post(
        "https://word-ai-lovat.vercel.app/api/v1/chat",
        { question },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data.answer;

      setAnswer(data);
      setHasAnswer(true); // Set hasAnswer to true when there's a response

      // Add user's question and bot's answer to chat history
      setChatHistory([
        ...chatHistory,
        { text: question, isUser: true },
        { text: data, isUser: false },
      ]);

      setQuestion(""); // Clear the input field after submission
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  return (
    <main className="py-2 px-4 bg-white  text-black flex flex-col justify-center items-center">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <article
        className="flex md:hidden items-center justify-between w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <button onClick={toggleSidebar}>
            <FaBars size={22} className="text-black" />
          </button>
        </div>
        <div className="text-black">New Chat</div>
        <div>
          <button>
            <AiOutlinePlus size={22} className="text-black" />
          </button>
        </div>
      </article>
      <div className="pt-2 md:hidden">
        <hr />
      </div>

      {isSidebarOpen && <Sidebar onClick={stopPropagation} />}

      {hasAnswer ? ( // Conditional rendering based on whether there's an answer
        <div
          className="flex flex-col lg:px-38 justify-center items-center"
          id="article"
        >
          <div className="chat-container lg:absolute lg:top-9 lg:right-0">
            {chatHistory.map((chat, index) => (
              <ChatBubble key={index} text={chat.text} isUser={chat.isUser} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-black text-4xl text-center mt-24">AI..</h1>
          </div>
          <div className="flex gap-2 flex-col w-full lg:w-[42vw] lg:flex-row mt-24">
            <div className="border border-white py-3 w-full rounded-lg px-12">
              <h3 className="font-semibold">Give me Idea</h3>
              <p>For what to do with my kids' art</p>
            </div>
            <div className="border border-white py-3 w-full rounded-lg px-12">
              <h3 className="font-semibold">Write a text</h3>
              <p>For what to give blessing</p>
            </div>
          </div>
          <div className=" gap-2 hidden lg:flex flex-col w-full lg:w-[42vw] lg:flex-row mt-8">
            <div className="border border-white py-3 w-full rounded-lg px-12">
              <h3 className="font-semibold">Give me Idea</h3>
              <p>For what to do with my kids' art</p>
            </div>
            <div className="border border-white py-3 w-full rounded-lg px-12">
              <h3 className="font-semibold">Write a text</h3>
              <p>For what to give blessing</p>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-center lg:absolute bottom-9 lg:w-[42vw] w-full outline-none mt-36">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="px-3 py-2 rounded text-black bg-gray-400 w-full"
        />
        <button
          onClick={handleQuestionSubmission}
          className="bg-blue-300/10 py-2 rounded-e-md px-3"
        >
          <BsArrowReturnRight size={25} />
        </button>
      </div>
    </main>
  );
}

