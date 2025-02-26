import {NextRequest, NextResponse} from 'next/server';
const pages = [{
  title: 'who_i_am',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mi sed viverra molestie. Morbi vel rutrum sem. Quisque commodo odio eget orci faucibus, vel pharetra mauris rutrum. Nulla imperdiet purus non semper vehicula. Fusce egestas euismod mi, eu malesuada purus semper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum metus quis justo facilisis, ut cursus mi ultrices. Pellentesque scelerisque consectetur odio.\n' +
      '\n' +
      'Nulla hendrerit, metus non ultricies volutpat, erat quam sollicitudin ante, vel blandit ex sem ut libero. Nullam sit amet consectetur orci. Etiam ultricies dolor ante. Vestibulum eget pellentesque tortor, id tristique leo. Curabitur pellentesque maximus libero, id aliquet velit ornare ut. Etiam non libero eu ipsum cursus dictum in vel magna. Aliquam vestibulum ligula ac metus aliquet pellentesque. Nullam accumsan leo at commodo pharetra. Sed vitae lacus laoreet, accumsan magna in, cursus mauris. Nulla eu aliquet eros, dictum pulvinar neque. In a massa a ante gravida imperdiet. Fusce viverra, diam at pharetra sodales, dolor enim faucibus tellus, eget pretium lectus mi eu dolor. Fusce lobortis quam lacus, quis laoreet dui laoreet in. Nam vel sapien in nibh feugiat consectetur. Suspendisse ante magna, tincidunt in urna sed, hendrerit egestas dolor. Curabitur imperdiet felis sed dui tincidunt ornare.\n' +
      '\n' +
      'Nullam ultricies erat at mauris pellentesque, non ornare eros scelerisque. Pellentesque commodo gravida enim. Ut cursus arcu vel commodo blandit. Nunc vel tristique nunc. Aenean pharetra aliquet ligula, sed aliquet ex ornare quis. Nunc odio nulla, interdum et felis vel, consectetur placerat elit. Aenean ornare dictum porttitor. Sed ultrices finibus ligula ac tempus. Donec eu lacus eget turpis mollis maximus. Mauris rhoncus est quis placerat ultricies. Nulla facilisi. Aenean scelerisque mollis odio. Nunc urna sem, pulvinar sed nisi sagittis, cursus viverra massa. Pellentesque convallis porta libero, sit amet suscipit elit venenatis ac. Fusce ut velit rutrum lorem porttitor ultricies eget tempor leo.\n' +
      '\n' +
      'Donec id massa felis. Praesent luctus et nunc nec mollis. Fusce mauris metus, fermentum venenatis iaculis vel, feugiat gravida nunc. Ut eget iaculis elit. Integer non facilisis quam. Praesent euismod et orci a volutpat. Phasellus massa ante, mollis eu malesuada eu, scelerisque feugiat nisl. Morbi ultricies erat nec velit iaculis fringilla. Curabitur porta libero sit amet rhoncus sagittis. Sed porttitor efficitur consectetur. Duis at lacus augue.\n' +
      '\n' +
      'Etiam a odio sed leo facilisis pellentesque consequat ac enim. Duis porttitor finibus elit id tincidunt. Phasellus vel rutrum nulla. Vestibulum sodales dui euismod enim commodo viverra. Nam in tempor lorem. Vivamus pretium sodales sapien, id tristique sapien congue a. Vestibulum rutrum dolor mollis lorem finibus commodo. Ut vitae orci maximus, tempor nisl id, blandit velit. Vestibulum pretium, purus at sodales lobortis, urna magna convallis nulla, ac fermentum velit est iaculis felis. Donec eu magna varius, finibus nulla sit amet, porttitor risus. Sed mollis urna non ligula tempus imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar tincidunt dui, id ullamcorper nisl bibendum et.'
}, {
  title: 'where_am_I_from',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mi sed viverra molestie. Morbi vel rutrum sem. Quisque commodo odio eget orci faucibus, vel pharetra mauris rutrum. Nulla imperdiet purus non semper vehicula. Fusce egestas euismod mi, eu malesuada purus semper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum metus quis justo facilisis, ut cursus mi ultrices. Pellentesque scelerisque consectetur odio.\n' +
      '\n' +
      'Nulla hendrerit, metus non ultricies volutpat, erat quam sollicitudin ante, vel blandit ex sem ut libero. Nullam sit amet consectetur orci. Etiam ultricies dolor ante. Vestibulum eget pellentesque tortor, id tristique leo. Curabitur pellentesque maximus libero, id aliquet velit ornare ut. Etiam non libero eu ipsum cursus dictum in vel magna. Aliquam vestibulum ligula ac metus aliquet pellentesque. Nullam accumsan leo at commodo pharetra. Sed vitae lacus laoreet, accumsan magna in, cursus mauris. Nulla eu aliquet eros, dictum pulvinar neque. In a massa a ante gravida imperdiet. Fusce viverra, diam at pharetra sodales, dolor enim faucibus tellus, eget pretium lectus mi eu dolor. Fusce lobortis quam lacus, quis laoreet dui laoreet in. Nam vel sapien in nibh feugiat consectetur. Suspendisse ante magna, tincidunt in urna sed, hendrerit egestas dolor. Curabitur imperdiet felis sed dui tincidunt ornare.\n' +
      '\n' +
      'Nullam ultricies erat at mauris pellentesque, non ornare eros scelerisque. Pellentesque commodo gravida enim. Ut cursus arcu vel commodo blandit. Nunc vel tristique nunc. Aenean pharetra aliquet ligula, sed aliquet ex ornare quis. Nunc odio nulla, interdum et felis vel, consectetur placerat elit. Aenean ornare dictum porttitor. Sed ultrices finibus ligula ac tempus. Donec eu lacus eget turpis mollis maximus. Mauris rhoncus est quis placerat ultricies. Nulla facilisi. Aenean scelerisque mollis odio. Nunc urna sem, pulvinar sed nisi sagittis, cursus viverra massa. Pellentesque convallis porta libero, sit amet suscipit elit venenatis ac. Fusce ut velit rutrum lorem porttitor ultricies eget tempor leo.\n' +
      '\n' +
      'Donec id massa felis. Praesent luctus et nunc nec mollis. Fusce mauris metus, fermentum venenatis iaculis vel, feugiat gravida nunc. Ut eget iaculis elit. Integer non facilisis quam. Praesent euismod et orci a volutpat. Phasellus massa ante, mollis eu malesuada eu, scelerisque feugiat nisl. Morbi ultricies erat nec velit iaculis fringilla. Curabitur porta libero sit amet rhoncus sagittis. Sed porttitor efficitur consectetur. Duis at lacus augue.\n' +
      '\n' +
      'Etiam a odio sed leo facilisis pellentesque consequat ac enim. Duis porttitor finibus elit id tincidunt. Phasellus vel rutrum nulla. Vestibulum sodales dui euismod enim commodo viverra. Nam in tempor lorem. Vivamus pretium sodales sapien, id tristique sapien congue a. Vestibulum rutrum dolor mollis lorem finibus commodo. Ut vitae orci maximus, tempor nisl id, blandit velit. Vestibulum pretium, purus at sodales lobortis, urna magna convallis nulla, ac fermentum velit est iaculis felis. Donec eu magna varius, finibus nulla sit amet, porttitor risus. Sed mollis urna non ligula tempus imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar tincidunt dui, id ullamcorper nisl bibendum et.'
}, {
  title: 'what_interests_me_most',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mi sed viverra molestie. Morbi vel rutrum sem. Quisque commodo odio eget orci faucibus, vel pharetra mauris rutrum. Nulla imperdiet purus non semper vehicula. Fusce egestas euismod mi, eu malesuada purus semper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum metus quis justo facilisis, ut cursus mi ultrices. Pellentesque scelerisque consectetur odio.\n' +
      '\n' +
      'Nulla hendrerit, metus non ultricies volutpat, erat quam sollicitudin ante, vel blandit ex sem ut libero. Nullam sit amet consectetur orci. Etiam ultricies dolor ante. Vestibulum eget pellentesque tortor, id tristique leo. Curabitur pellentesque maximus libero, id aliquet velit ornare ut. Etiam non libero eu ipsum cursus dictum in vel magna. Aliquam vestibulum ligula ac metus aliquet pellentesque. Nullam accumsan leo at commodo pharetra. Sed vitae lacus laoreet, accumsan magna in, cursus mauris. Nulla eu aliquet eros, dictum pulvinar neque. In a massa a ante gravida imperdiet. Fusce viverra, diam at pharetra sodales, dolor enim faucibus tellus, eget pretium lectus mi eu dolor. Fusce lobortis quam lacus, quis laoreet dui laoreet in. Nam vel sapien in nibh feugiat consectetur. Suspendisse ante magna, tincidunt in urna sed, hendrerit egestas dolor. Curabitur imperdiet felis sed dui tincidunt ornare.\n' +
      '\n' +
      'Nullam ultricies erat at mauris pellentesque, non ornare eros scelerisque. Pellentesque commodo gravida enim. Ut cursus arcu vel commodo blandit. Nunc vel tristique nunc. Aenean pharetra aliquet ligula, sed aliquet ex ornare quis. Nunc odio nulla, interdum et felis vel, consectetur placerat elit. Aenean ornare dictum porttitor. Sed ultrices finibus ligula ac tempus. Donec eu lacus eget turpis mollis maximus. Mauris rhoncus est quis placerat ultricies. Nulla facilisi. Aenean scelerisque mollis odio. Nunc urna sem, pulvinar sed nisi sagittis, cursus viverra massa. Pellentesque convallis porta libero, sit amet suscipit elit venenatis ac. Fusce ut velit rutrum lorem porttitor ultricies eget tempor leo.\n' +
      '\n' +
      'Donec id massa felis. Praesent luctus et nunc nec mollis. Fusce mauris metus, fermentum venenatis iaculis vel, feugiat gravida nunc. Ut eget iaculis elit. Integer non facilisis quam. Praesent euismod et orci a volutpat. Phasellus massa ante, mollis eu malesuada eu, scelerisque feugiat nisl. Morbi ultricies erat nec velit iaculis fringilla. Curabitur porta libero sit amet rhoncus sagittis. Sed porttitor efficitur consectetur. Duis at lacus augue.\n' +
      '\n' +
      'Etiam a odio sed leo facilisis pellentesque consequat ac enim. Duis porttitor finibus elit id tincidunt. Phasellus vel rutrum nulla. Vestibulum sodales dui euismod enim commodo viverra. Nam in tempor lorem. Vivamus pretium sodales sapien, id tristique sapien congue a. Vestibulum rutrum dolor mollis lorem finibus commodo. Ut vitae orci maximus, tempor nisl id, blandit velit. Vestibulum pretium, purus at sodales lobortis, urna magna convallis nulla, ac fermentum velit est iaculis felis. Donec eu magna varius, finibus nulla sit amet, porttitor risus. Sed mollis urna non ligula tempus imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar tincidunt dui, id ullamcorper nisl bibendum et.'
}, {
  title: 'where_am_I_going',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mi sed viverra molestie. Morbi vel rutrum sem. Quisque commodo odio eget orci faucibus, vel pharetra mauris rutrum. Nulla imperdiet purus non semper vehicula. Fusce egestas euismod mi, eu malesuada purus semper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum metus quis justo facilisis, ut cursus mi ultrices. Pellentesque scelerisque consectetur odio.\n' +
      '\n' +
      'Nulla hendrerit, metus non ultricies volutpat, erat quam sollicitudin ante, vel blandit ex sem ut libero. Nullam sit amet consectetur orci. Etiam ultricies dolor ante. Vestibulum eget pellentesque tortor, id tristique leo. Curabitur pellentesque maximus libero, id aliquet velit ornare ut. Etiam non libero eu ipsum cursus dictum in vel magna. Aliquam vestibulum ligula ac metus aliquet pellentesque. Nullam accumsan leo at commodo pharetra. Sed vitae lacus laoreet, accumsan magna in, cursus mauris. Nulla eu aliquet eros, dictum pulvinar neque. In a massa a ante gravida imperdiet. Fusce viverra, diam at pharetra sodales, dolor enim faucibus tellus, eget pretium lectus mi eu dolor. Fusce lobortis quam lacus, quis laoreet dui laoreet in. Nam vel sapien in nibh feugiat consectetur. Suspendisse ante magna, tincidunt in urna sed, hendrerit egestas dolor. Curabitur imperdiet felis sed dui tincidunt ornare.\n' +
      '\n' +
      'Nullam ultricies erat at mauris pellentesque, non ornare eros scelerisque. Pellentesque commodo gravida enim. Ut cursus arcu vel commodo blandit. Nunc vel tristique nunc. Aenean pharetra aliquet ligula, sed aliquet ex ornare quis. Nunc odio nulla, interdum et felis vel, consectetur placerat elit. Aenean ornare dictum porttitor. Sed ultrices finibus ligula ac tempus. Donec eu lacus eget turpis mollis maximus. Mauris rhoncus est quis placerat ultricies. Nulla facilisi. Aenean scelerisque mollis odio. Nunc urna sem, pulvinar sed nisi sagittis, cursus viverra massa. Pellentesque convallis porta libero, sit amet suscipit elit venenatis ac. Fusce ut velit rutrum lorem porttitor ultricies eget tempor leo.\n' +
      '\n' +
      'Donec id massa felis. Praesent luctus et nunc nec mollis. Fusce mauris metus, fermentum venenatis iaculis vel, feugiat gravida nunc. Ut eget iaculis elit. Integer non facilisis quam. Praesent euismod et orci a volutpat. Phasellus massa ante, mollis eu malesuada eu, scelerisque feugiat nisl. Morbi ultricies erat nec velit iaculis fringilla. Curabitur porta libero sit amet rhoncus sagittis. Sed porttitor efficitur consectetur. Duis at lacus augue.\n' +
      '\n' +
      'Etiam a odio sed leo facilisis pellentesque consequat ac enim. Duis porttitor finibus elit id tincidunt. Phasellus vel rutrum nulla. Vestibulum sodales dui euismod enim commodo viverra. Nam in tempor lorem. Vivamus pretium sodales sapien, id tristique sapien congue a. Vestibulum rutrum dolor mollis lorem finibus commodo. Ut vitae orci maximus, tempor nisl id, blandit velit. Vestibulum pretium, purus at sodales lobortis, urna magna convallis nulla, ac fermentum velit est iaculis felis. Donec eu magna varius, finibus nulla sit amet, porttitor risus. Sed mollis urna non ligula tempus imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar tincidunt dui, id ullamcorper nisl bibendum et.'
}, {
  title: 'what_can_I_do',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mi sed viverra molestie. Morbi vel rutrum sem. Quisque commodo odio eget orci faucibus, vel pharetra mauris rutrum. Nulla imperdiet purus non semper vehicula. Fusce egestas euismod mi, eu malesuada purus semper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum metus quis justo facilisis, ut cursus mi ultrices. Pellentesque scelerisque consectetur odio.\n' +
      '\n' +
      'Nulla hendrerit, metus non ultricies volutpat, erat quam sollicitudin ante, vel blandit ex sem ut libero. Nullam sit amet consectetur orci. Etiam ultricies dolor ante. Vestibulum eget pellentesque tortor, id tristique leo. Curabitur pellentesque maximus libero, id aliquet velit ornare ut. Etiam non libero eu ipsum cursus dictum in vel magna. Aliquam vestibulum ligula ac metus aliquet pellentesque. Nullam accumsan leo at commodo pharetra. Sed vitae lacus laoreet, accumsan magna in, cursus mauris. Nulla eu aliquet eros, dictum pulvinar neque. In a massa a ante gravida imperdiet. Fusce viverra, diam at pharetra sodales, dolor enim faucibus tellus, eget pretium lectus mi eu dolor. Fusce lobortis quam lacus, quis laoreet dui laoreet in. Nam vel sapien in nibh feugiat consectetur. Suspendisse ante magna, tincidunt in urna sed, hendrerit egestas dolor. Curabitur imperdiet felis sed dui tincidunt ornare.\n' +
      '\n' +
      'Donec id massa felis. Praesent luctus et nunc nec mollis. Fusce mauris metus, fermentum venenatis iaculis vel, feugiat gravida nunc. Ut eget iaculis elit. Integer non facilisis quam. Praesent euismod et orci a volutpat. Phasellus massa ante, mollis eu malesuada eu, scelerisque feugiat nisl. Morbi ultricies erat nec velit iaculis fringilla. Curabitur porta libero sit amet rhoncus sagittis. Sed porttitor efficitur consectetur. Duis at lacus augue.\n' +
      '\n' +
      'Etiam a odio sed leo facilisis pellentesque consequat ac enim. Duis porttitor finibus elit id tincidunt. Phasellus vel rutrum nulla. Vestibulum sodales dui euismod enim commodo viverra. Nam in tempor lorem. Vivamus pretium sodales sapien, id tristique sapien congue a. Vestibulum rutrum dolor mollis lorem finibus commodo. Ut vitae orci maximus, tempor nisl id, blandit velit. Vestibulum pretium, purus at sodales lobortis, urna magna convallis nulla, ac fermentum velit est iaculis felis. Donec eu magna varius, finibus nulla sit amet, porttitor risus. Sed mollis urna non ligula tempus imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi pulvinar tincidunt dui, id ullamcorper nisl bibendum et.'
}, {
  title: 'what_else_to_learn',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis mi sed viverra molestie. Morbi vel rutrum sem. Quisque commodo odio eget orci faucibus, vel pharetra mauris rutrum. Nulla imperdiet purus non semper vehicula. Fusce egestas euismod mi, eu malesuada purus semper ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam rutrum metus quis justo facilisis, ut cursus mi ultrices. Pellentesque scelerisque consectetur odio.\n' +
      '\n' +
      'Nulla hendrerit, metus non ultricies volutpat, erat quam sollicitudin ante, vel blandit ex sem ut libero. Nullam sit amet consectetur orci. Etiam ultricies dolor ante. Vestibulum eget pellentesque tortor, id tristique leo. Curabitur pellentesque maximus libero, id aliquet velit ornare ut. Etiam non libero eu ipsum cursus dictum in vel magna. Aliquam vestibulum ligula ac metus aliquet pellentesque. Nullam accumsan leo at commodo pharetra. Sed vitae lacus laoreet, accumsan magna in, cursus mauris. Nulla eu aliquet eros, dictum pulvinar neque. In a massa a ante gravida imperdiet. Fusce viverra, diam at pharetra sodales, dolor enim faucibus tellus, eget pretium lectus mi eu dolor. Fusce lobortis quam lacus, quis laoreet dui laoreet in. Nam vel sapien in nibh feugiat consectetur. Suspendisse ante magna, tincidunt in urna sed, hendrerit egestas dolor. Curabitur imperdiet felis sed dui tincidunt ornare.\n' +
      '\n'

}];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    //Если тело запроса пустое - возвращаем все страницы.
    if (Object.keys(body).length === 0) {
      const data = { message: 'All pages', body: { pages } };
      return NextResponse.json(data, { status: 200 });
    }
    //если в теле есть title - ищем страницу по title
    const page = pages.find((page) => page.title === body.title);
    if (!page) {
      return NextResponse.json({ error: 'Page not found' }, { status: 404 });
    }
    const data = { message: 'Page found', body: { page: page } };
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 400 });
  }
}