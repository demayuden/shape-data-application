from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Create superuser on Render if it does not exist'

    def handle(self, *args, **kwargs):
        username = 'dema'
        email = 'dema.yuden@student.aiu.edu.my'
        password = 'demayuden146'  # ✅ CHANGE THIS

        if not User.objects.filter(username=username).exists():
            User.objects.create_superuser(username, email, password)
            self.stdout.write(self.style.SUCCESS(f'Superuser "{username}" created.'))
        else:
            self.stdout.write(self.style.WARNING(f'Superuser "{username}" already exists.'))
