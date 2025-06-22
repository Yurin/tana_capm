// src/modules/photo/PhotoQuizPage.jsx
import PhotoQuizList from './PhotoQuizList'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function PhotoQuizPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // ←ボタンが押されたときの挙動に localStorage への保存など加える場合ここで
  }, [])

  return (
    <div className="min-h-screen bg-white px-4 py-10 font-sans text-gray-800 relative">
      {/* 左上戻るボタン */}
      <button
        onClick={() => navigate('/mission_01/story_01/qset_01')}
        className="absolute top-4 left-4 text-sm bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
      >
        ← モジュール選択に戻る
      </button>

      <div className="max-w-3xl mx-auto space-y-8 mt-8">
        <h1 className="text-2xl font-bold">写真チャレンジ</h1>
        <p className="text-sm text-gray-600">
          対象エリアにて指定された内容の写真を撮影してください。
完了後、撮影データをLINE上に送信 ― 認証が成功すればキーワードが発行されます。

⚠️ キーワードは一度のみ送信可能。
再提出は受け付けられません。
入力内容に誤りがないことを確認してから送信してください。
        </p>

        <PhotoQuizList />
      </div>
    </div>
  )
}

export default PhotoQuizPage
