import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    FlatList,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { colors, common } from '../../constants/Styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAlbums } from '../../actions/Albums';

interface OwnProps {
    navigation: NavigationStackProp<{ title: string }>;
}

interface StateProps {
    albums: [];
    posts: [];
}

interface DispatchProps {
    getAlbums: () => void;
}

type Props = StateProps & DispatchProps & OwnProps;

interface State {
    selected: Array<number>;
}

class Albums extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            selected: []
        };
    }

    render() {
        let contain =
            this.props.albums && this.props.albums.length > 0 ? (
                <FlatList
                    style={styles.scrollView}
                    data={this.props.albums}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => this.onSelect(item.id)}
                            style={[
                                styles.item,
                                {
                                    backgroundColor: item.selected
                                        ? colors.selectedItem
                                        : colors.surface
                                }
                            ]}>
                            <Text style={common.context}>{item.title}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item: any) => `${item.id}`}
                    extraData={this.state.selected}></FlatList>
            ) : (
                <Text>No data</Text>
            );
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>{contain}</SafeAreaView>
            </>
        );
    }

    onSelect = (id: number) => {
        const selected = this.state.selected;
        selected.push(id);
        this.setState({
            selected
        });
    };
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: colors.background
    },
    item: {
        padding: 8
    }
});

const mapStateToProps = (state: any) => {
    const { albums } = state.fetchData;
    return { albums };
};

const mapDispatchToProps = (dispatch: any) => {
    return bindActionCreators(
        {
            getAlbums
        },
        dispatch
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
