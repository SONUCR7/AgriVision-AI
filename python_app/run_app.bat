@echo off
title AgriVision AI - Crop Disease Prediction (TD-PCL)
cd /d "%~dp0"
echo =========================================================
echo   Launching AgriVision AI Dashboard (Streamlit)
echo   JAIN (Deemed-to-be University) - TD-PCL
echo =========================================================
streamlit run app.py
pause
