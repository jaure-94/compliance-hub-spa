import BlueBulletPoint from '@/assets/blue-bullet-point.svg';

export const ListItem = ({ title }: { title: string }) => {
  return (
    <div className="pt-2">
        <div className="bg-gray-300 px-4 py-4 md:px-6 lg:px-12 flex justify-start md:min-w-60 lg:min-w-lg items-center">
            <div className='flex flex-row'>
                <BlueBulletPoint className="h-5 mr-2 min-h-5 min-w-5" />
                <p className="text-base font-semibold">{title}</p>
            </div>
        </div>
    </div>
  )
}
