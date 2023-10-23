'use client'

import {useState} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {AiOutlineGoogle} from 'react-icons/ai'
import Link from "next/link";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function Signup() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button onClick={handleOpen}>Sign-up</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div>
              <p className="text-center">sign up</p>
            </div>
            <hr className="py-2" />
            <div className="flex justify-center bg-gray-400 py-2 rounded-lg transform transition-transform duration-300 hover:scale-110 ease-in">
              <Link href="#" className="flex gap-6 items-center text-[1rem]">
                <AiOutlineGoogle size={20} />
                <p>Continue With Google</p>
              </Link>
            </div>
            <div className="pt-8 pb-6">
              <hr />
            </div>

            <div className="mt-2 flex justify-center flex-col">
              <input
                type="Email"
                placeholder="Email"
                className="text-[1rem] bg-gray-100 outline-none hover:border-red-600 px-2 py-1 rounded-lg"
              />
              <button className="flex mt-4 justify-center bg-black py-2 rounded-lg transform transition-transform duration-300 hover:scale-110 ease-in">
                <p className="flex gap-6 items-center text-[1rem]">
                  <p className="text-white">Continue With Email</p>
                </p>
              </button>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link href='/' className="text-center text-gray-300 flex justify-center">Terms | Privacy</Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
