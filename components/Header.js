import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import withIntl from '../lib/withIntl';

const Header = () =>
    <div>
        <ul>
            <li>
                <Link prefetch href="/">
                    <a>
                        <FormattedMessage
                            id="header.home"
                            defaultMessage="Home"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/destinations">
                    <a>
                        <FormattedMessage
                            id="header.destinations"
                            defaultMessage="Destinations"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/collections">
                    <a>
                        <FormattedMessage
                            id="header.collections"
                            defaultMessage="Collections"
                        />
                    </a>
                </Link>
            </li>
            <li>
                <Link prefetch href="/articles">
                    <a>
                        <FormattedMessage
                            id="header.articles"
                            defaultMessage="Articles"
                        />
                    </a>
                </Link>
            </li>
        </ul>
    </div>;

export default withIntl(Header);
