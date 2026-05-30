#!/bin/bash
echo "🧠 Setting up NLP Studio..."

echo ""
echo "📦 Installing backend dependencies..."
cd backend && npm install
echo "✅ Backend ready"

echo ""
echo "📦 Installing frontend dependencies..."
cd ../frontend && npm install
echo "✅ Frontend ready"

echo ""
echo "🚀 To start the app:"
echo "   Terminal 1 → cd backend  && npm run dev"
echo "   Terminal 2 → cd frontend && npm start"
echo ""
echo "Open http://localhost:4200 in your browser"
