from django.urls import path
from .views import index
urlpatterns = [
    path('',index),
    path('join',index),
    path('create-room',index),
    path('room/<str:roomCode>',index)
]