from django.test import TestCase
from django.contrib.auth import get_user_model


# Create your tests here.
class CustomUserTests(TestCase):
    def test_create_user(self):
        User = get_user_model()
        user = User.objects.create_user(
            username='jpb3',
            email='jpb3@example.com',
            password='safepass1'
        )
        self.assertEqual(user.username, 'jpb3')
        self.assertEqual(user.email, 'jpb3@example.com')
        self.assertTrue(user.is_active)
        self.assertFalse(user.is_staff)
        self.assertFalse(user.is_superuser)

    def test_create_super_user(self):
        User = get_user_model()
        user = User.objects.create_superuser(
            username='admin',
            email='admin@example.com',
            password='safepass1'
        )
        self.assertEqual(user.username, 'admin')
        self.assertEqual(user.email, 'admin@example.com')
        self.assertTrue(user.is_active)
        self.assertTrue(user.is_staff)
        self.assertTrue(user.is_superuser)
