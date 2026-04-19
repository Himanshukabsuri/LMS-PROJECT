from django.urls import path
from .views import (
    CategoryView,
    BookListCreateView,
    BookDetailView,
    BookUpdateView,
    BookDeleteView
)

urlpatterns = [
    path('categories/', CategoryView.as_view()),

    path('books/', BookListCreateView.as_view()),
    path('books/<int:pk>/', BookDetailView.as_view()),
    path('books/<int:pk>/update/', BookUpdateView.as_view()),
    path('books/<int:pk>/delete/', BookDeleteView.as_view()),
]