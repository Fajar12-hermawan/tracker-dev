"use client"
import React,{useEffect, useState} from "react";
import {profile as fetchProfile} from "@/services/auth"
import { updateUser} from "@/services/user"
import LoadingSpinnerScreen from "@/ui/LoadingSpinnerScreen";
import Modal from "@/ui/Modal"
import { ModalProps

 } from "@/interfaces/IModal";

export default function ProfilePage () {
    const [form, setForm]= useState ({
        id:0,
        name: "",
        email: "",
        number: ""
    });
    const[loading, setLoading] = useState(true);
    const[isSubmitting, setIsSubmitting] = useState(false);
    const [ modal, setModal] = useState<ModalProps | null> (null)
    const loadProfile = async() => {
        try {
            const token = localStorage.getItem("token")
            if(!token) return;
            const res = await fetchProfile(token)

            const rawNumber = res.data.number || "";
            const cleanNumber = rawNumber.startsWith("+62") ? rawNumber.replace("+62", "") : rawNumber;

            setForm({
                ...res.data,
                number: cleanNumber
            })
        } catch (error) {
            if(error instanceof Error){
                setModal({message: error.message, type: "danger"})
            }else{
                setModal({message: "terjadi kesalahan", type: "danger"})
            }
            
        }finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadProfile()
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target;

        const sanitizedValue = name === "number" ? value.replace(/[^0-9]/g, "") : value;
        setForm((prev) => ({...prev, [name]: sanitizedValue}))
    };

    const handleSubmit = async (e:React.FormEvent
    ) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const update = await updateUser (form.id, {
                name: form.name,
                email: form.email,
                number: `+62${form.number}`
            });
            setForm({
                ...update.data,
                number: update.data.number.replace("+62", "")
            })
            setModal({message: "profile berhasil di perbarui", type: "success"})

        } catch (error) {
            if (error instanceof Error) {
              setModal({ message: error.message, type: "danger" });
            } else {
              setModal({ message: "terjadi kesalahan", type: "danger" });
            }
            
        }
    }

    return (
      <div className=" max-w-xl max-w-auto p-6 space-y-6 ">
        <h2 className="text-2xl font-bold mb-4">profile pengguna</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block mb-1 text-sm font-medium text -gray-700 "
            >
              nama lengkap
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text -gray-700 "
            >
              email
            </label>
            <input
              type="text"
              name="email"
              value={form.email}
              required
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label
              htmlFor="number"
              className="block mb-1 text-sm font-medium text-gray-700 "
            >nomor telepon</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600 text-sm">
                +62
              </div>
              <input
                type="text"
                name="number"
                value={form.number}
                required
                onChange={handleChange}
                className="w-full border rounded px-4 py-2 pl-12 "
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            {isSubmitting ? "menyimpan" : "simpan perubahan"}
          </button>
        </form>
        {modal && (
          <Modal
            type={modal.type}
            message={modal.message}
            onOk={() => setModal(null)}
          />
        )}
      </div>
    );
}