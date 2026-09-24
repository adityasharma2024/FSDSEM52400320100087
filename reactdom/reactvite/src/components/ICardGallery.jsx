import { useEffect, useState } from 'react'
import ICard from './ICard'
import cat from '../image/cat.png'
function ICardGallery() {
    const [selectedStudent, setSelectedStudent] = useState(null)
    const [typedTitle, setTypedTitle] = useState('')
    const [isDeletingTitle, setIsDeletingTitle] = useState(false)
    const title = 'Student Profiles'

    const student=
    [
        {
        pic:cat,
        name:"Rahul",
        roll:"3435454",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Ansh Tomer",
        roll:"89080",
        branch:"CSE",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Vansh",
        roll:"14242",
        branch:"CSE-AIML",
        college:"ABES Engineering College"
    },
    {
        pic:cat,
        name:"Amit",
        roll:"906464",
        branch:"CSE-DS",
        college:"ABES Engineering College"
    }

]

    useEffect(() => {
        if (!selectedStudent) return undefined

        const closeOnEscape = (event) => {
            if (event.key === 'Escape') setSelectedStudent(null)
        }

        document.addEventListener('keydown', closeOnEscape)
        document.body.style.overflow = 'hidden'

        return () => {
            document.removeEventListener('keydown', closeOnEscape)
            document.body.style.overflow = ''
        }
    }, [selectedStudent])

    useEffect(() => {
        const isComplete = typedTitle === title
        const isEmpty = typedTitle.length === 0
        const delay = isComplete ? 1500 : isEmpty ? 500 : isDeletingTitle ? 65 : 105
        const timer = setTimeout(() => {
            if (!isDeletingTitle && !isComplete) {
                setTypedTitle(title.slice(0, typedTitle.length + 1))
            } else if (!isDeletingTitle && isComplete) {
                setIsDeletingTitle(true)
            } else if (isDeletingTitle && !isEmpty) {
                setTypedTitle(title.slice(0, typedTitle.length - 1))
            } else {
                setIsDeletingTitle(false)
            }
        }, delay)

        return () => clearTimeout(timer)
    }, [isDeletingTitle, title, typedTitle])

  return (
        <main className="directory">
            <header className="directory__header">
                <div>
                    <p className="eyebrow">ABES / DIRECTORY</p>
                    <h1 aria-label={title} aria-live="polite">
                        <span className="typewriter-title">{typedTitle}</span>
                        <span className="typewriter-cursor" aria-hidden="true" />
                    </h1>
                    <p className="directory__intro">A quick look at the people shaping our next chapter.</p>
                </div>
                <div className="directory__count">
                    <strong>{student.length}</strong>
                    <span>profiles</span>
                </div>
            </header>
            <section className="student-grid" aria-label="Student profiles">
                {student.map((ele) => (
                    <ICard key={ele.roll} data={ele} onOpen={setSelectedStudent} />
                ))}
            </section>
            <footer className="directory__footer">
                <span>Academic community</span>
                <span>2024 / 25</span>
            </footer>
            {selectedStudent && (
                <div
                    className="profile-dialog-backdrop"
                    role="presentation"
                    onClick={(event) => {
                        if (event.target === event.currentTarget) setSelectedStudent(null)
                    }}
                >
                    <section className="profile-dialog" role="dialog" aria-modal="true" aria-labelledby="profile-dialog-title">
                        <button className="profile-dialog__close" type="button" onClick={() => setSelectedStudent(null)} aria-label="Close profile">
                            ×
                        </button>
                        <p className="eyebrow">FULL PROFILE</p>
                        <div className="profile-dialog__identity">
                            <img src={selectedStudent.pic} alt={`${selectedStudent.name} profile`} />
                            <div>
                                <h2 id="profile-dialog-title">{selectedStudent.name}</h2>
                                <p>{selectedStudent.college}</p>
                            </div>
                        </div>
                        <div className="profile-dialog__facts">
                            <div><span>Roll number</span><strong>{selectedStudent.roll}</strong></div>
                            <div><span>Branch</span><strong>{selectedStudent.branch}</strong></div>
                        </div>
                    </section>
                </div>
            )}
        </main>
  )
}

export default ICardGallery